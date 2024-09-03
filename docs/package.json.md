```
{
  "name": "react-brackets",
  "version": "0.4.7",
  "description": "React component to render dynamic bracket UI",
  "author": "mohux",
  "license": "MIT",
  "repository": "mohux/react-brackets",
  "main": "dist/index.js",
  "module": "dist/index.modern.js",
  "source": "src/index.tsx",
  "engines": {
    "node": ">=10"
  },
  "scripts": {
    "build": "microbundle-crl --no-compress --format modern,cjs",
    "start": "microbundle-crl watch --no-compress --format modern,cjs",
    "prepare": "run-s build",
    "test": "run-s test:unit test:lint test:build",
    "test:build": "run-s build",
    "test:lint": "eslint './src/**/*.{ts,tsx}'",
    "test:unit": "cross-env CI=1 react-scripts test --env=jsdom",
    "test:watch": "react-scripts test --env=jsdom",
    "predeploy": "cd example && yarn install && yarn run build",
    "deploy": "gh-pages -d example/build"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-swipeable-views": "^0.14.0",
    "react-swipeable-views-utils": "^0.14.0",
    "styled-components": "^5.1.1"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.5.0",
    "@testing-library/react": "^16.0.1",
    "@testing-library/user-event": "^14.5.2",
    "@types/jest": "^29.5.12",
    "@types/node": "^22.5.2",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@types/react-swipeable-views": "^0.13.5",
    "@types/styled-components": "^5.1.34",
    "@typescript-eslint/eslint-plugin": "^8.4.0",
    "@typescript-eslint/parser": "^8.4.0",
    "cross-env": "^7.0.3",
    "eslint": "^9.9.1",
    "eslint-config-prettier": "^9.1.0",
    "eslint-config-standard": "^17.1.0",
    "eslint-config-standard-react": "^13.0.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-promise": "^7.1.0",
    "eslint-plugin-react": "^7.35.1",
    "gh-pages": "^6.1.1",
    "prettier": "^3.3.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "^5.0.1",
    "typescript": "^5.5.4"
  },
  "files": [
    "dist"
  ],
  "keywords": [
    "react",
    "brackets",
    "react-brackets",
    "tournaments",
    "react-tournaments"
  ],
  "dependencies": {
    "react-swipeable-views": "^0.14.0",
    "styled-components": "^6.1.13"
  }
}

```
