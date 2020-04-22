/***
 * @Author:xiawen
 * @Date:2020-04-22 15:52:30
 * @LastModifiedBy:xiawen
 * @Last Modified time:2020-04-22 15:52:30
 */

'use strict'

const Generator = require('yeoman-generator');
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the astounding ${chalk.red('generator-react-staging')} generator!`))

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ]

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props
    })
  }

  writing() {
    this.fs.copy(this.templatePath('dummyfile.txt'), this.destinationPath('dummyfile.txt'))
  }

  install() {
    this.installDependencies()
  }
}
