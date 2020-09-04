export default [
  {
    type: 'folder',
    name: 'mock',
    ignore: false,
  },
  {
    type: 'folder',
    name: 'node_modules',
    ignore: true,
  },
  {
    type: 'folder',
    name: 'src',
    status: 'M',
    open: true,
    children: [
      {
        type: 'folder',
        name: 'assets',
      },
      {
        type: 'folder',
        name: 'components',
        status: 'M',
      },
      {
        type: 'folder',
        name: 'layouts',
        status: 'M',
        open: true,
        children: [
          {
            type: 'folder',
            name: '__tests__',
          },
          {
            type: 'folder',
            name: 'components',
            status: 'M',
            open: true,
            children: [
              {
                type: 'folder',
                name: 'Menu',
                status: 'U',
                open: true,
                children: [
                  {
                    type: 'file',
                    name: 'Menu.tsx',
                    status: 'U',
                  },
                ],
              },
            ],
          },
          {
            type: 'file',
            name: 'BasicLayout.tsx',
            status: 'M',
          },
          {
            type: 'file',
            name: 'config.ts',
            status: 'M',
          },
          {
            type: 'file',
            name: 'basicLayout.less',
            status: 'M',
          },
        ],
      },
      {
        type: 'folder',
        name: 'pages',
        status: '',
        open: true,
        children: [
          {
            type: 'folder',
            name: '__tests__',
            status: '',
          },
          {
            type: 'file',
            name: 'index.tsx',
            status: '',
          },
        ],
      },
      {
        type: 'folder',
        name: 'styles',
        status: 'M',
        open: true,
        children: [
          {
            type: 'folder',
            name: 'config',
            status: 'M',
            open: true,
            children: [
              {
                type: 'file',
                name: 'color.less',
                status: 'M',
              },
              {
                type: 'file',
                name: 'index.less',
                status: '',
              },
            ],
          },
          {
            type: 'folder',
            name: 'mixin',
            open: false,
          },
          {
            type: 'folder',
            name: 'reset',
            status: 'M',
            open: false,
          },
        ],
      },
      {
        type: 'file',
        name: 'global.less',
        status: 'M',
      },
    ],
  },
  {
    type: 'file',
    name: '.editorconfig',
  },
  {
    type: 'file',
    name: '.env',
  },
  {
    type: 'file',
    name: '.eslintrc',
  },
  {
    type: 'file',
    name: '.gitignore',
  },
  {
    type: 'file',
    name: '.prettierignore',
  },
  {
    type: 'file',
    name: '.prettierrc',
  },
  {
    type: 'file',
    name: 'package.json',
  },
  {
    type: 'file',
    name: 'webpack.config.js',
  },
  {
    type: 'file',
    name: 'yarn.lock',
  },
];
