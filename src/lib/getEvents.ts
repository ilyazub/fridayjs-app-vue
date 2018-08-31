import { events } from '@/data/fridayjs.json';

export function getEvents() {
  return events;
}

export function getEvent(id) {
  return events.find(event => event.id === parseInt(id));
}
