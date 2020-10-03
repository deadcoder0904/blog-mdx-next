import tinytime from 'tinytime'

const dateTemplate = tinytime('{MMMM} {DD}, {YYYY}')
export const formatDate = (x) => dateTemplate.render(new Date(x))
