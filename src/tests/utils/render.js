import React from 'react';
import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../base/redux/reducers';
import { MemoryRouter } from 'react-router-dom';


const AllTheProviders = ({ initialState, store = createStore(reducer, initialState) }) => ({ children }) => {
    return (
        <Provider store={store}>
            <MemoryRouter>
                {children}
            </MemoryRouter>
        </Provider>
    )
}

const customRender = (ui, options = {}) => {
    return render(ui, { wrapper: AllTheProviders({ initialState: options.initialState }), ...options })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }