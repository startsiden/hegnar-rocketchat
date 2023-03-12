import { Meteor } from 'meteor/meteor';
import { CustomSounds } from '@rocket.chat/models';
import type { ICustomSound } from '@rocket.chat/core-typings';

declare module '@rocket.chat/ui-contexts' {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	interface ServerMethods {
		listCustomSounds: () => ICustomSound[];
	}
}

Meteor.methods({
	async listCustomSounds() {
		return CustomSounds.find({}).toArray();
	},
});