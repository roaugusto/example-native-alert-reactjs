
import React, { Component } from "react";
import './styles.scss';

export default class Alert extends Component {

  render() {

    let classAlert = ''

    if (this.props.isInfo) {
      classAlert = "info "
    } else if (this.props.isSuccess) {
      classAlert = "success ";
    } else if (this.props.isError) {
      classAlert = "error ";
    } else if (this.props.isWarning) {
      classAlert = "warning ";
    }

    if (this.props.isAbsolute) classAlert += ' absolute'
    if (this.props.isFixed) classAlert += ' fixed'

    return (

      this.props.isOpen ?
        <div className={'container'}>
          <div className={`${classAlert}`}>
            <span>{this.props.message}</span>
            {
              this.props.onClose && (
                <span className="close-button"
                  onClick={this.props.onClose}>x</span>)
            }
          </div >
        </div>
        :
        null

    )
  }
}

