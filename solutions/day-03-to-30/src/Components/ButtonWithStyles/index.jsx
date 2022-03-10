const ButtonWithStyles = (Component, name = 'default') => {
    const colors = [
        {
            name: 'default',
            backgroundColor: '#e7e7e7',
            color: '#000000',
        },
        {
          name: 'react',
          backgroundColor: '#61dbfb',
          color: '#ffffff',
        },
        {
          name: 'success',
          backgroundColor: '#4CAF50',
          color: '#ffffff',
        },
        {
          name: 'info',
          backgroundColor: '#2196F3',
          color: '#ffffff',
        },
        {
          name: 'warning',
          backgroundColor: '#ff9800',
          color: '#ffffff',
        },
        {
          name: 'danger',
          backgroundColor: '#f44336',
          color: '#ffffff',
        },
      ]
      
      const backgroundColor = colors.find((color) => color.name === name)

      return (props) => {
          return <Component {...props} style={backgroundColor}>{props.children}</Component>
      }
}

export default ButtonWithStyles