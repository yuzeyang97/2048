import { Tree } from 'antd';
import React, { Component } from 'react';
import './DepartmentTree.css'


const TreeNode = Tree.TreeNode;

export default class DepartmentTree extends Component {
    onSelect = (selectedKeys, info) => {
        console.log(selectedKeys,info)
        const {Actions}=this.props;
        Actions.filterHandleLoad('')
        Actions.changeCurrentSelect(Number(selectedKeys[0]))
      }
      renderDepTree=(rootId,entities)=>{
            const root=entities[rootId];
            return (
                <TreeNode title={root.name} key={root.id}>
                    {
                        root.bloc?root.bloc.map(depId=>{
                            return this.renderDepTree(depId,entities);
                        }):null
                    }
                </TreeNode>
            )
      }
    render() {
        const { userConfig,entities } = this.props;
        const {blocResult}=userConfig;
        const {bloc}=entities
        const tree=this.renderDepTree(blocResult,bloc)
        return (
            <div className='handletree-wrap'>
                <Tree
                    showLine
                    defaultExpandedKeys={['100001']}
                    onSelect={this.onSelect}
                >              
                    {tree}
                </Tree>
            </div>
        )
    }
}