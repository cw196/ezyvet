import Counter from './Counter';
import themes from './themes';

import injectSheet from 'react-jss';

export default injectSheet(themes)(Counter);