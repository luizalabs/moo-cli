export default `import * as React from 'react'{{#airbnb}};{{/airbnb}}
{{#flux}}import { connect } from 'react-redux'{{#airbnb}};{{/airbnb}}{{/flux}}

interface I{{name}} {}

{{#flux}}function mapStateToProps(state) {
  return {
  }{{#airbnb}};{{/airbnb}}
}{{/flux}}

class {{name}} extends Component<I{{name}}, {}> {
  public static defaultProps = {}

  constructor (props: I{{name}}) {
    super(props)
  }

  public render () {
    return (
      <div
        className="{{name}}">
        I{{name}} was created!
      </div>
    ){{#airbnb}};{{/airbnb}}
  }
}{{#airbnb}};{{/airbnb}}

{{^flux}}export default {{name}}{{#airbnb}};{{/airbnb}}{{/flux}}{{#flux}}export default connect(
  mapStateToProps{{#airbnb}},{{/airbnb}}
)({{name}}){{#airbnb}};{{/airbnb}}{{/flux}}
`;
