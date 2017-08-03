import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'

const React = window.React

export default () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme({})}>
      <Paper
        zDepth={1}
        style={{
          padding: 40,
          height: 100,
          width: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <FlatButton label="Click" />
      </Paper>
    </MuiThemeProvider>
  )
}
