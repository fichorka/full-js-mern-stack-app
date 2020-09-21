import { ItemsDb } from '../../db/types'
import { Item } from '../../entities'
import { makeItem } from '../../entities/item'

const makeAddItem: MakeAddItem = function ({ itemsDb }) {
    const addItem: AddItem = async function ({ itemInfo }) {
        const item = makeItem({ itemInfo })
        const exists = await itemsDb.findOneByName(item.name)
        if (exists) {
            throw new Error("Item's name is already taken.")
        }
        await itemsDb.insertOne(item)
        return item
    }

    return addItem
}

export { makeAddItem }

type MakeAddItem = ({ itemsDb }: { itemsDb: ItemsDb }) => AddItem

export type AddItem = ({ itemInfo }: { itemInfo: Item }) => Promise<Item>
