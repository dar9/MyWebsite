import javax.swing.*;
import java.awt.*;
public class SimpleApplet extends JApplet{
	public void init(){
		JLabel label = new JLabel("my first applet");
		
		//set the layout manager
		setLayout(new FlowLayout());
		
		//add the label to the content pane
		add(label);
	}
	
}
