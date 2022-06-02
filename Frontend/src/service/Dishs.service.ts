import { BaseService } from './base.service';
import type { Dish} from '../model/Dishs.model';

export class CitiesService extends BaseService {
	public constructor(
		baseApiUrl: string)
	{
		super(`${baseApiUrl}/kitchen1`);
	}

	public getAll(callback: (kitchen1: Array<Dish>) => void): void {
		return this.Request('GET', `${this.apiUrl}/`, callback);
	}
}
