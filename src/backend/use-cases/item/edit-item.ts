import { ItemsDb } from '../../db/types'
import { Item } from '../../entities'
import { makeItem } from '../../entities/item'

const makeEditItem: MakeEditItem = function ({ itemsDb }) {
    const editItem: EditItem = async function ({ name, changes }) {
        if (
            !changes.name &&
            !changes.price &&
            !changes.description &&
            !changes.images
        ) {
            throw new Error('No changes.')
        }

        const existing = await itemsDb.findOneByName(name)
        if (!existing) {
            throw new Error('No item with such name.')
        }

        const item = makeItem({ itemInfo: { ...existing, ...changes } })
        await itemsDb.updateOne(item)
        return item
    }

    return editItem
}

export { makeEditItem }

type MakeEditItem = ({ itemsDb }: { itemsDb: ItemsDb }) => EditItem

export type EditItem = ({
    name,
    changes
}: {
    name?: string
    changes?: Item
}) => Promise<Item>
