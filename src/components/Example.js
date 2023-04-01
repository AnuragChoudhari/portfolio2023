import { TypeAnimation } from 'react-type-animation';

const Example = () => {
    return (
      <TypeAnimation
        sequence={[
          'Web Developer',
          2000, 
          'UI/UX Designer', 
          2000, 
          'Music Producer', 
          2000, 
          'Visual Artist', 
          2000, 
          ':)', 
          2000,
          () => {
            console.log('Sequence completed');
          },
        ]}
        wrapper="p"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '24px', display: 'inline-block' }}
      />
    );
  };

  export default Example;