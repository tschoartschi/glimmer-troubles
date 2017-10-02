import Component, {tracked} from '@glimmer/component';
export default class extends Component {

    @tracked state = {
        isRoot: false,
        hasChildren: false
    };

    didInsertElement() {
        //document.getElementById('external-event').addEventListener('click', this._getNewValues.bind(this));
        document.getElementById('external-event').addEventListener('click', () => this._getNewValues());
    }

    private _getNewValues() {
        const isRoot = (Math.random() > 0.5) ? true : false;
        const hasChildren = (Math.random() > 0.5) ? false : true;
        this.state = {...this.state, isRoot, hasChildren};
    }

}
