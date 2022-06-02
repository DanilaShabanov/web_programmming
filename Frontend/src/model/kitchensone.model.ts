import type { Tag } from "../model/tag.model";

export interface Kitchen {
	id: number;
	first_name: string;
	last_name: string;
	Dish_id: number;
	avatar_url: string;
	text: string;
	tags: Array<Tag>;
}
