import { Animate, type AnimateAttributes } from "../animate/index.js";
import type { Attributes } from "../types/index.js";

export type DialogAttributes = Attributes<Dialog> & AnimateAttributes;

/**
 * Provides triggers and animations for the `HTMLDialogElement`.
 */
export class Dialog extends Animate {
	constructor() {
		super();
	}

	/** The `HTMLDialogElement` within the element. */
	get dialog() {
		return this.getContent(HTMLDialogElement);
	}

	/** `HTMLDialogElement.showModal()` with animation. */
	async show() {
		this.dialog.showModal();
		await this.animateElement();
	}

	/** `HTMLDialogElement.close()` with animation. */
	async close() {
		await this.animateElement({
			options: {
				direction: "reverse",
			},
		});
		this.dialog.close();
	}

	/** `show` or `close` depending on the dialog's `open` attribute. */
	async toggle() {
		if (this.dialog.open) this.close();
		else this.show();
	}

	mount() {
		this.triggerListener(() => this.toggle());

		this.safeListener("keydown", (e) => {
			if (e.key === "Escape" && this.dialog.open) {
				// to execute animation
				e.preventDefault();
				this.close();
			}
		});
	}
}
