/*
 *                 Sun Public License Notice
 * 
 * The contents of this file are subject to the Sun Public License
 * Version 1.0 (the "License"). You may not use this file except in
 * compliance with the License. A copy of the License is available at
 * http://www.sun.com/
 * 
 * The Original Code is Forte for Java, Community Edition. The Initial
 * Developer of the Original Code is Sun Microsystems, Inc. Portions
 * Copyright 1997-2000 Sun Microsystems, Inc. All Rights Reserved.
 */

package org.netbeans.modules.javadoc.comments;

import org.openide.util.Utilities;
import org.openide.src.MemberElement;
import org.openide.src.JavaDocTag;
import org.openide.src.JavaDocSupport;
import org.openide.TopManager;
import org.openide.NotifyDescriptor;

/**
 *
 * @author
 * @version
 */
public class SerialFieldTagPanel extends TagPanel {

    private static final String cardName = "CRD_SERIAL_FIELD"; // NOI18N


    static final long serialVersionUID =5117666281468847966L;
    /** Initializes the Form */
    public SerialFieldTagPanel( MemberElement element, JavaDocEditorPanel editorPanel ) {
        super( editorPanel );

        initComponents ( );

        editorPanel.registerComponent( descriptionTextArea );
        addHTMLComponent( descriptionTextArea );
    }

    /** This method is called from within the constructor to
     * initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is
     * always regenerated by the FormEditor.
     */
    private void initComponents () {//GEN-BEGIN:initComponents
        jLabel2 = new javax.swing.JLabel ();
        nameTextField = new javax.swing.JTextField ();
        jLabel3 = new javax.swing.JLabel ();
        typeTextField = new javax.swing.JTextField ();
        jLabel1 = new javax.swing.JLabel ();
        descriptionScrollPane = new javax.swing.JScrollPane ();
        descriptionTextArea = new javax.swing.JEditorPane ();
        setLayout (new java.awt.GridBagLayout ());
        java.awt.GridBagConstraints gridBagConstraints1;

        jLabel2.setText (org.openide.util.NbBundle.getBundle(SerialFieldTagPanel.class).getString("CTL_SerialFieldTagPanel.jLabel2.text"));
        jLabel2.setHorizontalAlignment (javax.swing.SwingConstants.LEFT);


        gridBagConstraints1 = new java.awt.GridBagConstraints ();
        gridBagConstraints1.insets = new java.awt.Insets (2, 2, 2, 1);
        gridBagConstraints1.anchor = java.awt.GridBagConstraints.WEST;
        add (jLabel2, gridBagConstraints1);

        nameTextField.setText ("jTextField1"); // NOI18N
        nameTextField.addActionListener (new java.awt.event.ActionListener () {
                                             public void actionPerformed (java.awt.event.ActionEvent evt) {
                                                 nameTextFieldActionPerformed (evt);
                                             }
                                         }
                                        );
        nameTextField.addFocusListener (new java.awt.event.FocusAdapter () {
                                            public void focusLost (java.awt.event.FocusEvent evt) {
                                                fieldFocusLost (evt);
                                            }
                                        }
                                       );


        gridBagConstraints1 = new java.awt.GridBagConstraints ();
        gridBagConstraints1.gridwidth = 0;
        gridBagConstraints1.fill = java.awt.GridBagConstraints.HORIZONTAL;
        gridBagConstraints1.insets = new java.awt.Insets (2, 1, 2, 2);
        gridBagConstraints1.anchor = java.awt.GridBagConstraints.WEST;
        add (nameTextField, gridBagConstraints1);

        jLabel3.setText (org.openide.util.NbBundle.getBundle(SerialFieldTagPanel.class).getString("CTL_SerialFieldTagPanel.jLabel3.text"));
        jLabel3.setHorizontalAlignment (javax.swing.SwingConstants.LEFT);


        gridBagConstraints1 = new java.awt.GridBagConstraints ();
        gridBagConstraints1.insets = new java.awt.Insets (2, 2, 2, 1);
        gridBagConstraints1.anchor = java.awt.GridBagConstraints.WEST;
        add (jLabel3, gridBagConstraints1);

        typeTextField.setText ("jTextField2"); // NOI18N
        typeTextField.addActionListener (new java.awt.event.ActionListener () {
                                             public void actionPerformed (java.awt.event.ActionEvent evt) {
                                                 typeTextFieldActionPerformed (evt);
                                             }
                                         }
                                        );
        typeTextField.addFocusListener (new java.awt.event.FocusAdapter () {
                                            public void focusLost (java.awt.event.FocusEvent evt) {
                                                fieldFocusLost (evt);
                                            }
                                        }
                                       );


        gridBagConstraints1 = new java.awt.GridBagConstraints ();
        gridBagConstraints1.gridwidth = 0;
        gridBagConstraints1.fill = java.awt.GridBagConstraints.HORIZONTAL;
        gridBagConstraints1.insets = new java.awt.Insets (2, 1, 2, 2);
        gridBagConstraints1.anchor = java.awt.GridBagConstraints.WEST;
        add (typeTextField, gridBagConstraints1);

        jLabel1.setText (org.openide.util.NbBundle.getBundle(SerialFieldTagPanel.class).getString("CTL_SerialFieldTagPanel.jLabel1.text"));
        jLabel1.setHorizontalAlignment (javax.swing.SwingConstants.LEFT);


        gridBagConstraints1 = new java.awt.GridBagConstraints ();
        gridBagConstraints1.insets = new java.awt.Insets (2, 2, 2, 1);
        gridBagConstraints1.anchor = java.awt.GridBagConstraints.NORTHWEST;
        add (jLabel1, gridBagConstraints1);


        descriptionTextArea.setContentType ("text/html"); // NOI18N
        descriptionTextArea.addFocusListener (new java.awt.event.FocusAdapter () {
                                                  public void focusGained (java.awt.event.FocusEvent evt) {
                                                      descriptionTextAreaFocusGained (evt);
                                                  }
                                                  public void focusLost (java.awt.event.FocusEvent evt) {
                                                      descriptionTextAreaFocusLost (evt);
                                                  }
                                              }
                                             );

        descriptionScrollPane.setViewportView (descriptionTextArea);


        gridBagConstraints1 = new java.awt.GridBagConstraints ();
        gridBagConstraints1.gridwidth = 0;
        gridBagConstraints1.gridheight = 0;
        gridBagConstraints1.fill = java.awt.GridBagConstraints.BOTH;
        gridBagConstraints1.insets = new java.awt.Insets (2, 1, 2, 2);
        gridBagConstraints1.weightx = 1.0;
        gridBagConstraints1.weighty = 1.0;
        add (descriptionScrollPane, gridBagConstraints1);

    }//GEN-END:initComponents

    private void descriptionTextAreaFocusLost (java.awt.event.FocusEvent evt) {//GEN-FIRST:event_descriptionTextAreaFocusLost
        enableHTMLButtons( false );
    }//GEN-LAST:event_descriptionTextAreaFocusLost

    private void descriptionTextAreaFocusGained (java.awt.event.FocusEvent evt) {//GEN-FIRST:event_descriptionTextAreaFocusGained
        enableHTMLButtons( true );
        fieldFocusLost( evt );
    }//GEN-LAST:event_descriptionTextAreaFocusGained

    private void fieldFocusLost (java.awt.event.FocusEvent evt) {//GEN-FIRST:event_fieldFocusLost

        /*
        if ( evt.getSource() == nameTextField ) {
          System.out.println("UUYUname");
          if ( checkField( nameTextField ) ) {
            return;
          }
    }

        if ( evt.getSource() == typeTextField ) {
          System.out.println("YTYTtypoe");
          if ( checkField( typeTextField ) ) {
            return;
          }
    }
        */

        commitTagChange();
    }//GEN-LAST:event_fieldFocusLost

    /*
    private boolean checkField( javax.swing.JTextField field ) {

      String text = field.getText();
      
      if ( text.trim().length() > 0 && !Utilities.isJavaIdentifier( text ) ) {
        NotifyDescriptor nd = new NotifyDescriptor.Message( 
          java.text.MessageFormat.format(
            org.openide.util.NbBundle.getBundle(SerialFieldTagPanel.class).getString("MSG_SerialFieldTagPanel.NotIdentifier"),
            new Object[] { text } ),
          NotifyDescriptor.ERROR_MESSAGE );
        TopManager.getDefault().notify( nd );
        commitTagChange();
        //field.grabFocus();
        return true;
      }
      
      return false;
}
    */

    private void nameTextFieldActionPerformed (java.awt.event.ActionEvent evt) {//GEN-FIRST:event_nameTextFieldActionPerformed
        // Add your handling code here:
    }//GEN-LAST:event_nameTextFieldActionPerformed

    private void typeTextFieldActionPerformed (java.awt.event.ActionEvent evt) {//GEN-FIRST:event_typeTextFieldActionPerformed
        // Add your handling code here:
    }//GEN-LAST:event_typeTextFieldActionPerformed


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel jLabel2;
    private javax.swing.JTextField nameTextField;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JTextField typeTextField;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JScrollPane descriptionScrollPane;
    private javax.swing.JEditorPane descriptionTextArea;
    // End of variables declaration//GEN-END:variables

    void setData( JavaDocTag tag ) {
        String fieldName = ((JavaDocTag.SerialField)tag).fieldName();
        nameTextField.setText( fieldName == null ? "" : fieldName ); //NOI18N

        String fieldType = ((JavaDocTag.SerialField)tag).fieldType();
        typeTextField.setText( fieldType == null ? "" : fieldType ); //NOI18N

        String description = ((JavaDocTag.SerialField)tag).description();
        descriptionTextArea.setText( description == null ? "" : description ); //NOI18n // NOI18N

        descriptionTextArea.setCaretPosition( 0 );
    }

    JavaDocTag getTag( String tagName ) {
        return JavaDocSupport.createSerialFieldTag( tagName,
                nameTextField.getText() + " " + // NOI18N
                typeTextField.getText() + " " + // NOI18N
                descriptionTextArea.getText() );
    };


    String getCardName() {
        return cardName;
    }

    void grabFirstFocus() {
        nameTextField.grabFocus();
    }
}

/*
 * Log
 *  9    Gandalf   1.8         1/13/00  Petr Hrebejk    Serial field tag bugfix
 *  8    Gandalf   1.7         1/12/00  Petr Hrebejk    i18n
 *  7    Gandalf   1.6         1/3/00   Petr Hrebejk    Various bugfixes - 4709,
 *       4978, 5017, 4981, 4976, 5016, 4740,  5005
 *  6    Gandalf   1.5         11/27/99 Patrik Knakal   
 *  5    Gandalf   1.4         11/10/99 Petr Hrebejk    Workaround for catching 
 *       the mnemonics of HTML tag buttons
 *  4    Gandalf   1.3         10/23/99 Ian Formanek    NO SEMANTIC CHANGE - Sun
 *       Microsystems Copyright in File Comment
 *  3    Gandalf   1.2         9/16/99  Petr Hrebejk    Tag descriptions editing
 *       in HTML editor + localization
 *  2    Gandalf   1.1         8/13/99  Petr Hrebejk    Window serialization 
 *       added & Tag change button in Jdoc editor removed 
 *  1    Gandalf   1.0         7/9/99   Petr Hrebejk    
 * $
 */