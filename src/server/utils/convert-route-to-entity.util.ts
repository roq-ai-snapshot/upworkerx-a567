const mapping: Record<string, string> = {
  applications: 'application',
  bookings: 'booking',
  companies: 'company',
  freelancers: 'freelancer',
  jobs: 'job',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
