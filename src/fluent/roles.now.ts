import { Role } from '@servicenow/sdk/core'

/**
 * Administrative role for the GTFS Schedule application.
 *
 * Grants read/write/delete access to every x_msag_gtfs_schedu_* table and is the
 * only role allowed to import, validate, activate and clean up feeds. Guests
 * (anonymous portal users) are never granted this role — they reach data only
 * through the encapsulated GtfsPublicService Script Include (added in a later phase).
 */
export const gtfsAdmin = Role({
    name: 'x_msag_gtfs_schedu.admin',
    description: 'GTFS administrator: feed import, validation, activation, configuration and full access to all GTFS tables.',
})
