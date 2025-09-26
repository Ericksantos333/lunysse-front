import { Link } from 'react-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Home } from 'lucide-react';

export const NotFound = () => {
    return(
        <div className='min-h-screen flex item-center justify-center p-4'>
            <Card className='text-center max-w-md'>
        <div className='mb-6'>
            <h1 className='text-6x1 font-bold text-light mb-4'>404</h1>
            <h2 className='text-2x1 font-semibold text-dark mb-2'>pagina não encontrada</h2>
            <p className=' text-dark/70'>
                ops! A página que Você está procuramdo não exite ou foi movida.
            </p>
            </div>
            <Link to="/dashboard">
                <Button className="flex items-center gap-2 mx auto">
                    <Home size={20} />
                    Voltar ao Inicio
                    </Button>
                    </Link>
                    </Card>
                    </div> 
                
                

    ) 
    
}
    
        
        
    

