export default {
  get: jest.fn(() =>
    Promise.resolve({
      products: [
        {
          _id: '5d1f237e8f3903e269cab399',
          onSale: false,
          price: '$42.09',
          priceSale: '$36.40',
          picture: 'https://picsum.photos/300/300',
          color: 'blue',
          size: 'small',
          name: 'duis do',
          description_short: 'laborum sunt veniam',
          description:
            'Id eu laborum sunt laboris pariatur irure laboris velit duis ipsum fugiat. Nisi qui ullamco sunt consectetur fugiat enim occaecat officia est aliquip eu et. Minim elit reprehenderit officia qui Lorem esse laborum in.'
        },
        {
          _id: '5d1f237eeec440b96da41119',
          onSale: true,
          price: '$48.96',
          priceSale: '$26.20',
          picture: 'https://picsum.photos/300/300',
          color: 'blue',
          size: 'large',
          name: 'eiusmod Lorem',
          description_short: 'Lorem officia non',
          description:
            'Mollit adipisicing elit occaecat enim nostrud eu proident ea qui amet pariatur. Ea irure aliquip officia enim laboris ipsum officia nostrud. Mollit mollit proident do laborum do duis incididunt anim et.'
        },
        {
          _id: '5d1f237ebb7b349222f7e49e',
          onSale: true,
          price: '$58.78',
          priceSale: '$51.80',
          picture: 'https://picsum.photos/300/300',
          color: 'purple',
          size: 'medium',
          name: 'mollit ad',
          description_short: 'nostrud adipisicing laboris',
          description:
            'Qui commodo nostrud dolor occaecat pariatur fugiat. Veniam tempor duis fugiat velit labore. Proident mollit minim anim tempor cupidatat exercitation ut.'
        }
      ]
    })
  )
};
