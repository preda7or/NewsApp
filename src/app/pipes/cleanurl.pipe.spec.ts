import { CleanUrlPipe } from './cleanurl.pipe';

describe('CleanUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new CleanUrlPipe();
    expect(pipe).toBeTruthy();
  });

  it('works', () => {
    const pipe = new CleanUrlPipe();
    expect(
      pipe.transform(
        'https://www.theguardian.com/world/2018/feb/11/russian-passenger-plane-saratov-airlines-flight-6w703-crashes-outside-moscow-reports'
      )
    ).toBe(
      'world/2018/feb/11/russian-passenger-plane-saratov-airlines-flight-6w703-crashes-outside-moscow-reports'
    );
    expect(
      pipe.transform(
        ' http://www.theguardian.com/world/2018/feb/11/russian-passenger-plane-saratov-airlines-flight-6w703-crashes-outside-moscow-reports'
      )
    ).toBe(
      'world/2018/feb/11/russian-passenger-plane-saratov-airlines-flight-6w703-crashes-outside-moscow-reports'
    );
    expect(
      pipe.transform(
        '/world/2018/feb/11/russian-passenger-plane-saratov-airlines-flight-6w703-crashes-outside-moscow-reports'
      )
    ).toBe(
      'world/2018/feb/11/russian-passenger-plane-saratov-airlines-flight-6w703-crashes-outside-moscow-reports'
    );
    expect(
      pipe.transform(
        ' world/2018/feb/11/russian-passenger-plane-saratov-airlines-flight-6w703-crashes-outside-moscow-reports '
      )
    ).toBe(
      'world/2018/feb/11/russian-passenger-plane-saratov-airlines-flight-6w703-crashes-outside-moscow-reports'
    );
  });
});
