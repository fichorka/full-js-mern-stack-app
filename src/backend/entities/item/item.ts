import { Item } from '../types'
import makeDescription from './fields/description'
import makeImages from './fields/images'
import makeName from './fields/name'
import makePrice from './fields/price'

export default function buildMakeItem(): MakeItem {
    const makeItem: MakeItem = function ({ itemInfo }) {
        const item: Item = {}

        item.name = makeName(itemInfo.name)

        item.price = makePrice(itemInfo.price)

        if (itemInfo.description) {
            item.description = makeDescription(itemInfo.description)
        }

        if (itemInfo.images) {
            item.images = makeImages(itemInfo.images)
        }

        return item
    }

    return makeItem
}

type MakeItem = ({ itemInfo }: { itemInfo: Item }) => Item
