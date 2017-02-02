{
	users: {
		isAuthed,
		isFetching,
		error,
		authedId,
		[uid]: {
			lastUpdated,
			info: {
				name,
				uid,
				avatar,
			}
		}
	},
	modal: {
		duck,
		isOpen
	},
	ducks: {
		isFetching,
		error,
		[duckId]: {
			lastUpdated,
			info: {
				avatar,
				duckId,
				name,
				text,
				timestamp,
				uid
			}
		}
	},
	usersDucks: {
		isFetching,
		error,
		[uid]: {
			lastUpdated,
			duckIds: [duckId, duckId, duckId]
		}
	},
	likeCount: {
		[duckId]: 0
	},
	userLikes: {
		[duckId]: true
	},
	replies: {
		isFetching,
		error,
		[duckId]: {
			lastUpdated,
			replies: {
				[replyId]: {
					name,
					reply,
					uid,
					timestamp,
					avatar,
					replyId
				}
			}
		}
	},
	listeners: {
		[listenerId]: true
	},
	feed: {
		isFetching,
		error,
		newDucksAvailable,
		newDucksToAdd: [duckId, duckId],
		duckIds: [duckId, duckId]
	}
}
