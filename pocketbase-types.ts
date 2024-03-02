/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Listings = "listings",
	Usernames = "usernames",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ListingsRecord = {
	description?: string
	email?: string
	full_name?: string
	subjects?: string
	title?: string
	username?: string
}

export type UsernamesRecord = {
	username: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ListingsResponse<Texpand = unknown> = Required<ListingsRecord> & BaseSystemFields<Texpand>
export type UsernamesResponse<Texpand = unknown> = Required<UsernamesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	listings: ListingsRecord
	usernames: UsernamesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	listings: ListingsResponse
	usernames: UsernamesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'listings'): RecordService<ListingsResponse>
	collection(idOrName: 'usernames'): RecordService<UsernamesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
