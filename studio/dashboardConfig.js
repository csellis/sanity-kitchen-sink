export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4d655d479f1100dca7d4ff',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-edvccp13',
                  apiId: '9818f06a-48b4-432a-9de9-940cd22d5d83'
                },
                {
                  buildHookId: '5f4d655d9eacc300ad7f8d83',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-o24qwesf',
                  apiId: 'bb8c0ee1-233a-4774-a850-5994f0eb43ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/csellis/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-o24qwesf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
