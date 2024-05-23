import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var greetingLabel: UILabel!

    override func viewDidLoad() {
        super.viewDidLoad()
        greetingLabel.text = "Hello, World!"
    }

    @IBAction func changeGreeting(_ sender: UIButton) {
        greetingLabel.text = "Hello, Swift!"
    }
}
