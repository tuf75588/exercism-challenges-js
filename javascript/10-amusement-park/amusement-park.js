/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  return { name, age, ticketId };
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  if (!visitor['ticketId']) return visitor;
  visitor['ticketId'] = null;
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  if (ticketId in tickets === false) return 'unknown ticket id';
  const keys = Object.keys(tickets);
  const status = keys.map((keyId) => {
    if (keyId === ticketId) {
      if (tickets[keyId] === null) return 'not sold';
      return `sold to ${tickets[keyId]}`;
    }
  });
  return status.join('');
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  if (ticketId in tickets === false || tickets[ticketId] === null)
    return 'invalid ticket !!!';
  const keys = Object.keys(tickets);
  const status = keys.map((keyId) => {
    if (keyId === ticketId) {
      return `${tickets[keyId]}`;
    }
  });
  return status.join('');
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  if ('gtc' in visitor) {
    const { version } = visitor.gtc;
    return version;
  }
  return undefined;
}
