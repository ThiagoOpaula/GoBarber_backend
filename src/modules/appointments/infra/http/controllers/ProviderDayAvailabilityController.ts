import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvaibilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, month, year } = request.body;

    const listProviderDayAvaibilityService = container.resolve(
      ListProviderDayAvaibilityService,
    );

    const availability = await listProviderDayAvaibilityService.execute({
      provider_id,
      day,
      month,
      year,
    });

    return response.json(availability);
  }
}
