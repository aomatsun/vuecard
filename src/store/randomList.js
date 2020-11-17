const lists = [
  {
      'width': 200,
      'height': 150,
      'top': 10,
      'left': 10,
      'draggable': true,
      'resizable': true,
      'minw': 1,
      'minh': 1,
      'axis': 'both',
      'parentLim': true,
      'snapToGrid': false,
      'aspectRatio': false,
      'zIndex': 1,
      'color': '#EF9A9A',
      'active': false
  },
  {
      'width': 200,
      'height': 150,
      'top': 40,
      'left': 40,
      'draggable': true,
      'resizable': true,
      'minw': 10,
      'minh': 10,
      'axis': 'both',
      'parentLim': true,
      'snapToGrid': false,
      'aspectRatio': false,
      'zIndex': 1,
      'color': '#E6C27A',
      'active': false,
      'class': 'box-shaddow'
  },
  {
      'width': 200,
      'height': 150,
      'top': 80,
      'left': 80,
      'draggable': true,
      'resizable': true,
      'minw': 10,
      'minh': 10,
      'axis': 'both',
      'parentLim': true,
      'snapToGrid': false,
      'aspectRatio': false,
      'zIndex': 1,
      'color': '#AED581',
      'active': false
  },
  {
      'width': 200,
      'height': 150,
      'top': 100,
      'left': 100,
      'draggable': true,
      'resizable': true,
      'minw': 10,
      'minh': 10,
      'axis': 'both',
      'parentLim': true,
      'snapToGrid': false,
      'aspectRatio': false,
      'zIndex': 1,
      'color': '#81D4FA',
      'active': false
  },
]

const randomList = () => {
  return lists[Math.floor(Math.random() * lists.length)]
}

export default randomList
