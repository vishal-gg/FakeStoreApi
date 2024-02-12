import { Users } from '@data/user/users'
export const totalUsers = Users.length

type filterType = {
    page: number | null;
    limit: number | null;
    sort: string | null;
}

export const getSingleUser = (id: number) => {
    if (Number.isNaN(id)) throw new Error("Oops! only numeric characters are allowed.")
    const filteredUsers = Users.filter(user => user.id === id)
    if (filteredUsers.length > 0) return filteredUsers[0]
    else return Users[totalUsers - 1]
}


export const getPaginatedUsers = (filter: filterType) => {
    const page = filter.page ?? 1;
    const limit = filter.limit ?? 50;
    const sort = filter.sort;
    const skip = (page - 1) * limit;
    const totalPages = Math.ceil(totalUsers / limit);

    let usersCopy = [...Users];

    if (skip >= totalUsers) {
        const lastPageSkip = (totalPages - 1) * limit;
        usersCopy = usersCopy.slice(lastPageSkip);
    } else {
        usersCopy = usersCopy.slice(skip, skip + limit);
    }

    if (sort !== null) {
        if (!['desc', 'asc'].includes(sort)) {
            throw new Error("Sort type must be 'desc' or 'asc'.");
        }
        switch (sort) {
            case "desc":
                usersCopy.sort((a, b) => b.id - a.id);
                break;
            case "asc":
                usersCopy.sort((a, b) => a.id - b.id);
                break;
        }
    }

    return { users: usersCopy };
};



export const getUsersSort = (sort: string | null) => {
    if (sort !== null) {
        if (!['desc', 'asc'].includes(sort)) {
            throw new Error("Sort type must be 'desc' or 'asc'.");
        }
    }

    let users = Users;

    switch (sort) {
        case "desc":
            users.sort((a, b) => b.id - a.id);
            break;
        case "asc":
            users.sort((a, b) => a.id - b.id);
            break;
    }

    return {users}
}
