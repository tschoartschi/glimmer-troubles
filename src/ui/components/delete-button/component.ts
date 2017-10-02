import Component, { tracked } from "@glimmer/component";

export default class extends Component {
    @tracked('args')
    get isActive() {
        return !this.args.isRoot && !this.args.hasChildren;
    }
};
