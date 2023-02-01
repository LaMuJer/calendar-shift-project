import CancelIcon from '@mui/icons-material/Cancel';

const Modal = ({ display }) => {
  return (
    <div className="abtAndModalContainer ">
      <div className="modal-container centerDiv">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <CancelIcon style={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            top: 0,
            right: 0,
            cursor: 'pointer'
          }} />
          <h5 style={{ marginTop: '30px', marginBottom: '30px' }}>Disclaimer </h5>
          <p>
            <div>
              The information provided by ("we," "us," or "our") on
              <span style={{ margin: '0 10px' }}>
                <a href="https://ourddf.ae">https://ourddf.ae</a>
              </span>
              (the "Site") is for general informational purposes only. All information
              on the Site is provided in good faith, however we make no representation
              or warranty of any kind, express or implied, regarding the accuracy,
              adequacy, validity, reliability, availability, or completeness of any
              information on the Site.
            </div>
            <div style={{ marginTop: '10px' }}>
              <b >UNDER NO CIRCUMSTANCE</b> SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY
              LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE
              OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE
              SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR
              OWN RISK.
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
