/**
 * Created by for_minho on 2016/12/13.
 */
var Button = React.createClass({
    handleClick:function () {
        alert(this.props.key);
    },
    render:function () {
        debugger;
        return (
            <div className="Button">
                <button className="button"
                        onClick={this.handleClick}>
                    {this.props.children}</button>
            </div>
        );
    }
});

var ButtonList = React.createClass({
    render:function () {
        var data = this.props.data;

        var comments = data.map(function (tmpData) {
            debugger;
           return (
               <Button disabled={tmpData.disabled} key={tmpData.classKey} id={tmpData.classKey}>
                   {tmpData.text}
               </Button>
           );
        });
        return (
            <div className="ButtonList">
                {comments}
            </div>
        );
    }
});

var data =[
    {text:"primriy",disabled:false,classKey:"primriy-key"},
    {text:"default",disabled:false,classKey:"default-key"},
    {text:"disabled",disabled:true,classKey:"disabled-key"}
];

React.render(
    <ButtonList data={data}/>,
    document.getElementById('example')

);