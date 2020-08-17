import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvaibilityService from '@modules/appointments/services/ListProviderMonthAvaibilityService';

export default class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.body;

    const listProviderMonthAvaibilityService = container.resolve(
      ListProviderMonthAvaibilityService,
    );

    const availability = await listProviderMonthAvaibilityService.execute({
      provider_id,
      month,
      year,
    });

    return response.json(availability);
  }
}
