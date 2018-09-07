export default `import * as React from 'react'{{#airbnb}};{{/airbnb}}
{{#flux}}
import { connect } from 'react-redux'{{#airbnb}};{{/airbnb}}
{{/flux}}
{{^clean}}

interface I{{name}} {}{{#airbnb}};{{/airbnb}}
{{/clean}}
{{^clean}}

interface {{name}}State {}{{#airbnb}};{{/airbnb}}
{{/clean}}

{{#flux}}
function mapStateToProps(state) {
  return {
  }{{#airbnb}};{{/airbnb}}
}

{{/flux}}
class {{name}} extends React.Component<I{{name}}, {{^clean}}{{name}}State{{/clean}}{{#clean}}{}{{/clean}}> {
  {{^clean}}
  public static defaultProps = {}{{#airbnb}};{{/airbnb}}
  {{/clean}}

  {{^clean}}
  public state = {}{{#airbnb}};{{/airbnb}}

  {{/clean}}
  constructor (props: I{{name}}) {
    super(props)
  }

  public render () {
    return (
      <div
        className="{{name}}">
        {{name}} was created!
      </div>
    ){{#airbnb}};{{/airbnb}}
  }
}{{#airbnb}};{{/airbnb}}

{{^flux}}export default {{name}}{{#airbnb}};{{/airbnb}}{{/flux}}{{#flux}}export default connect(
  mapStateToProps{{#airbnb}},{{/airbnb}}
)({{name}}){{#airbnb}};{{/airbnb}}{{/flux}}
`;
