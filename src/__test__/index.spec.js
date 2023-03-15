import {render, screen} from '@testing-library/react'
import Home from '../pages/index'

describe('Index', () => {
    
    describe('Componente de Inicio', () => {
        it('Se renderiza bien', () => {
            render(
                <Home users={[{id: 1, operacion: 6,}]} />
            )

            let paragraph = screen.getByText('Agregar a la lista')
            expect(paragraph).toBeInTheDocument()
        })
    })

    describe('getStaticProps', () => {
        
    })
})