import './typography.css';
import { TestComponentProps } from './typography.props';

const Typography = ({uwu, owo, omo}: TestComponentProps) => {
    return (
        <div className={omo ? 'donthelpme': 'helpme'}>
            <h1>
                {uwu}
            </h1>

            <p>TEXT</p>
            
            {owo ? <p>
                {owo}
            </p>: null}



            <p>TEXT</p>
            
            <div>
                {omo.map(string => (
                    <p className="uwu">{string}</p>
                )
                )}
            </div>
        </div>
    )
}

export default Typography;