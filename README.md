 
//  mkdir monorepo && cd monorepo
 npx lerna init
 npx create-react-app packages/project-one
 npx create-react-app packages/project-two
 
 cd packages &&  lerna create shared-components -y
 cd shared-components
 npm run build

 cd project-one
 npm install shared-components

// if you do change to shared-components
 cd shared-components
 npm run dev
 nvm run build

