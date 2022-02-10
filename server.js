import { httpServer } from './src/app';

const port = 3001;

httpServer.listen(port, () => console.log(`Is running in ${port}`));
