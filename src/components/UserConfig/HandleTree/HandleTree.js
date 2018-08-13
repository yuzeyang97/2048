import { Tree } from 'antd';
import React, { Component } from 'react';
import './HandleTree.css'


const TreeNode = Tree.TreeNode;

export default class HandleTree extends Component {
    onSelect = (selectedKeys, info) => {
        console.log(selectedKeys,info)
        const {Actions}=this.props;
        Actions.filterHandleLoad('')
        Actions.changeCurrentSelect(Number(selectedKeys[0]))
      }
    render() {
        const { userConfig,entities } = this.props;
        const {blocResult}=userConfig;
        const {bloc,office,department,group}=entities
        const tree=blocResult.map((item)=>{
            return (<TreeNode title={bloc[item].name} key={bloc[item].id}>
                        {bloc[item].office?bloc[item].office.map((item)=>{
            return (<TreeNode title={office[item].name} key={office[item].id}>
                        {office[item].department?office[item].department.map((item)=>{
            return (<TreeNode title={department[item].name} key={department[item].id}>
                        {department[item].group?department[item].group.map((item)=>{
            return (<TreeNode title={group[item].name} key={group[item].id}>
                    </TreeNode>)
        }):''}
                    </TreeNode>)
        }):''}
                    </TreeNode>)
        }):''}
                    </TreeNode>)
        })
        return (
            <div className='handletree-wrap'>
                <Tree
                    showLine
                    defaultExpandedKeys={['100001']}
                    onSelect={this.onSelect}
                >
                    <TreeNode title="所有部门" key="treeRoot">
                    {tree}
                    </TreeNode>
                </Tree>
            </div>
        )
    }
}