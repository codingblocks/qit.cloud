import React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

const SortableItem = SortableElement(({ value }) => value)

const SortableList = SortableContainer(({ items }) => (
  <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
    {items.map((value, index) => (
      <SortableItem key={`item-${value.key}`} index={index} value={value} />
    ))}
  </ul>
))

export default SortableList
