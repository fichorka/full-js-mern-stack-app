import { ItemsDb } from '../../db/types'
import { User } from '../../entities/types'

const makeListItems: MakeListItems = function ({ itemsDb }) {
    const listItems: ListItems = async function ({
        name,
        order,
        sortBy,
        limit
    }) {
        const items = name
            ? await itemsDb
                  .findOneByName(name)
                  .then((res) => (res ? [res] : []))
            : await itemsDb.findAll({ name, order, sortBy, limit })

        if (!items.length) {
            if (name) {
                throw new Error('No item with such name.')
            } else {
                throw new Error('No items to display.')
            }
        }

        return name ? items[0] : items
    }

    return listItems
}

export { makeListItems }

type MakeListItems = ({ itemsDb }: { itemsDb: ItemsDb }) => ListItems

export type ListItems = ({
    name,
    order,
    sortBy,
    limit
}: {
    name: string
    order: 1 | -1
    sortBy: string
    limit: number
}) => Promise<User | User[] | []>
