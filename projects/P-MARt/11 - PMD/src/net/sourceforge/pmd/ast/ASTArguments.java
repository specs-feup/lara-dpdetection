/* Generated By:JJTree: Do not edit this line. ASTArguments.java */

package net.sourceforge.pmd.ast;

public class ASTArguments extends SimpleNode {
    public ASTArguments(int id) {
        super(id);
    }

    public ASTArguments(JavaParser p, int id) {
        super(p, id);
    }


    public int getArgumentCount() {
        if (this.jjtGetNumChildren() == 0) {
            return 0;
        }
        return this.jjtGetChild(0).jjtGetNumChildren();
    }

    /** Accept the visitor. **/
    public Object jjtAccept(JavaParserVisitor visitor, Object data) {
        return visitor.visit(this, data);
    }
}