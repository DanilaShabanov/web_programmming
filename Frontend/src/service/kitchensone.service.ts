import { BaseService } from './base.service';
import type { Kitchen } from '../model/kitchensone.model';
export class KitchenService extends BaseService {
	public constructor(
		baseApiUrl: string)
	{
		super(`${baseApiUrl}/kitchen`);
	}

	public get(id: number, callback: (kitchens: Kitchen) => void): void {
		return this.Request('GET', `${this.apiUrl}/${id}`, callback);
	}

	public getAll(callback: (kitchen: Array<Kitchen>) => void): void {
		return this.Request('GET', `${this.apiUrl}/`, callback);
	}

	public getByDish(DishId: number, callback: (kitchen: Array<Kitchen>) => void): void {
		const filteredCallback = (kitchen: Array<Kitchen>) => callback(kitchen
			.filter(kitchens => kitchens.Dish_id === DishId)
		);

		return this.getAll(filteredCallback);
	}
}
