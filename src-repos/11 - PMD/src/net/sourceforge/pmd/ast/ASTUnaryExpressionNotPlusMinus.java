/* Generated By:JJTree: Do not edit this line. ASTUnaryExpressionNotPlusMinus.java */

package net.sourceforge.pmd.ast;

public class ASTUnaryExpressionNotPlusMinus extends SimpleNode {
    public ASTUnaryExpressionNotPlusMinus(int id) {
        super(id);
        setDiscardable();
    }

    public ASTUnaryExpressionNotPlusMinus(JavaParser p, int id) {
        super(p, id);
        setDiscardable();
    }


    /** Accept the visitor. **/
    public Object jjtAccept(JavaParserVisitor visitor, Object data) {
        return visitor.visit(this, data);
    }
}