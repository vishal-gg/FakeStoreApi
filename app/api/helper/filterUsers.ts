import { Users } from '../data/user/users'
export const totalUsers = Users.length

type filterType = {
    page: number | null;
    limit: number | null;
}

export const getSingleUser = (id: number) => {
    if (Number.isNaN(id)) throw new Error("Oops! only numeric characters are allowed.")
    const filteredUsers = Users.filter(user => user.id === id)
    if (filteredUsers.length > 0) return filteredUsers[0]
    else return Users[totalUsers - 1]
}


export const getPaginatedUsers = (filter:filterType) =>{
    const page = filter.page ?? 1;
    const limit = filter.limit ?? 50;
    const skip = (page - 1) * limit;
    const totalPages = Math.ceil(totalUsers / limit);

    if(skip >= totalUsers){
        const lastPageSkip = (totalPages - 1) * limit;
        const users = Users.slice(lastPageSkip);
        return {users}
    } else {
        const users = Users.slice(skip, skip + limit);
        return {users}
    }
}


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
