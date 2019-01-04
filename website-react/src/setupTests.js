// This is a magical file that create-react-app and jest use for boilerplate config
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#initializing-test-environment
import 'jest-dom/extend-expect'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
